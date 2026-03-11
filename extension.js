const vscode = require('vscode');

/**
 * Game of Thrones Theme Extension
 * Auto-sets the GOT icon theme when a GOT color theme is selected.
 */
function activate(context) {

    const GOT_ICON_THEME = 'got-icons-westeros';
    const GOT_THEME_PREFIX = 'GOT:';

    // Function to apply icon theme when a GOT color theme is active
    function applyGotIconTheme() {
        const config = vscode.workspace.getConfiguration();
        const currentColorTheme = config.get('workbench.colorTheme') || '';
        const currentIconTheme = config.get('workbench.iconTheme') || '';

        // Check if the current color theme is a GOT theme
        if (currentColorTheme.startsWith(GOT_THEME_PREFIX) && currentIconTheme !== GOT_ICON_THEME) {
            config.update('workbench.iconTheme', GOT_ICON_THEME, vscode.ConfigurationTarget.Global)
                .then(() => {
                    // Silently applied - no notification needed
                }, (err) => {
                    console.error('GOT Theme: Failed to set icon theme:', err);
                });
        }
    }

    // Apply icon theme on activation (when VS Code starts)
    applyGotIconTheme();

    // Listen for theme changes
    const disposable = vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration('workbench.colorTheme')) {
            // Small delay to ensure the theme has been fully applied
            setTimeout(() => {
                applyGotIconTheme();
            }, 300);
        }
    });

    context.subscriptions.push(disposable);

    // Also show a welcome notification the first time
    const hasShownWelcome = context.globalState.get('gotThemeWelcomeShown', false);
    const currentTheme = vscode.workspace.getConfiguration().get('workbench.colorTheme') || '';
    
    if (!hasShownWelcome && currentTheme.startsWith(GOT_THEME_PREFIX)) {
        vscode.window.showInformationMessage(
            '⚔️ Welcome to the Seven Kingdoms! GOT icon theme has been activated automatically.',
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
