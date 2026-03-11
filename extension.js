const vscode = require('vscode');

/**
 * Game of Thrones Theme Extension
 * Auto-sets the GOT icon theme when a GOT color theme is selected.
 * Respects user preference: "always", "ask", or "never".
 */
function activate(context) {

    const GOT_ICON_THEME = 'got-icons-westeros';
    const GOT_THEME_PREFIX = 'GOT:';

    /**
     * Apply the GOT icon theme based on user preference.
     * @param {boolean} isUserAction - true if triggered by user changing theme
     */
    async function applyGotIconTheme(isUserAction) {
        const config = vscode.workspace.getConfiguration();
        const currentColorTheme = config.get('workbench.colorTheme') || '';
        const currentIconTheme = config.get('workbench.iconTheme') || '';

        // Only act if user is on a GOT color theme and icons aren't already set
        if (!currentColorTheme.startsWith(GOT_THEME_PREFIX)) return;
        if (currentIconTheme === GOT_ICON_THEME) return;

        // Read the user's preference
        const gotConfig = vscode.workspace.getConfiguration('gotTheme');
        const preference = gotConfig.get('autoSetIconTheme', 'ask');

        if (preference === 'never') {
            return; // User explicitly doesn't want auto-switching
        }

        if (preference === 'always') {
            await setIconTheme();
            return;
        }

        // preference === 'ask' — show a prompt
        if (isUserAction) {
            const result = await vscode.window.showInformationMessage(
                `⚔️ You've chosen "${currentColorTheme}". Would you like to also activate the GOT icon theme?`,
                { modal: false },
                'Yes, activate icons',
                'No thanks',
                'Always activate',
                'Never ask again'
            );

            switch (result) {
                case 'Yes, activate icons':
                    await setIconTheme();
                    break;
                case 'Always activate':
                    await gotConfig.update('autoSetIconTheme', 'always', vscode.ConfigurationTarget.Global);
                    await setIconTheme();
                    vscode.window.showInformationMessage('⚔️ GOT icons will now always activate with GOT themes. You can change this in Settings → GOT Theme.');
                    break;
                case 'Never ask again':
                    await gotConfig.update('autoSetIconTheme', 'never', vscode.ConfigurationTarget.Global);
                    vscode.window.showInformationMessage('👑 GOT icons won\'t auto-switch. You can change this in Settings → GOT Theme.');
                    break;
                // 'No thanks' or dismissed — do nothing for this time
            }
        }
    }

    /**
     * Actually set the icon theme
     */
    async function setIconTheme() {
        try {
            await vscode.workspace.getConfiguration().update(
                'workbench.iconTheme',
                GOT_ICON_THEME,
                vscode.ConfigurationTarget.Global
            );
        } catch (err) {
            console.error('GOT Theme: Failed to set icon theme:', err);
        }
    }

    // On startup: apply if preference is "always"
    const startupConfig = vscode.workspace.getConfiguration('gotTheme');
    const startupPref = startupConfig.get('autoSetIconTheme', 'ask');
    if (startupPref === 'always') {
        applyGotIconTheme(false);
    }

    // Listen for theme changes
    const disposable = vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration('workbench.colorTheme')) {
            // Small delay to ensure the theme has been fully applied
            setTimeout(() => {
                applyGotIconTheme(true);
            }, 500);
        }
    });

    context.subscriptions.push(disposable);

    // Welcome message on first activation
    const hasShownWelcome = context.globalState.get('gotThemeWelcomeShown', false);
    const currentTheme = vscode.workspace.getConfiguration().get('workbench.colorTheme') || '';

    if (!hasShownWelcome && currentTheme.startsWith(GOT_THEME_PREFIX)) {
        vscode.window.showInformationMessage(
            '⚔️ Welcome to the Seven Kingdoms! Use Ctrl+Shift+G to switch between house themes.',
            'Valar Morghulis'
        );
        context.globalState.update('gotThemeWelcomeShown', true);
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
