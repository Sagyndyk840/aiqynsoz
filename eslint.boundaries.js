import boundaries from 'eslint-plugin-boundaries'

export const eslintBoundariesConfig = {
    plugins: {
        boundaries,
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        'boundaries/elements': [
            { type: 'app', pattern: './src/app' },
            { type: 'pages', pattern: './src/pages' },
            { type: 'widgets', pattern: './src/widgets/*' },
            { type: 'features', pattern: './src/features/*' },
            { type: 'entities', pattern: './src/entities/*' },
            { type: 'shared', pattern: './src/shared' },
        ],
    },
    rules: {
        'boundaries/element-types': [
            2,
            {
                default: 'allow',
                rules: [
                    // shared нельзя импортировать из других слоев
                    {
                        from: 'shared',
                        disallow: ['entities', 'features', 'widgets', 'pages', 'app'],
                        message:
                            'Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})',
                    },
                    // entities нельзя импортировать из features, widgets, pages, app
                    {
                        from: 'entities',
                        disallow: ['features', 'widgets', 'pages', 'app'],
                        message:
                            'Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})',
                    },
                    // features нельзя импортировать из widgets, pages, app
                    {
                        from: 'features',
                        disallow: ['widgets', 'pages', 'app'],
                        message:
                            'Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})',
                    },
                    // widgets нельзя импортировать из pages, app
                    {
                        from: 'widgets',
                        disallow: ['pages', 'app'],
                        message:
                            'Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})',
                    },
                    // pages нельзя импортировать из app
                    {
                        from: 'pages',
                        disallow: ['app'],
                        message:
                            'Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})',
                    },
                ],
            },
        ],

        'boundaries/entry-point': [
            2,
            {
                default: 'disallow',
                message:
                    'Модуль (${file.type}) должен импортироваться через public API. Прямой импорт из ${dependency.source} запрещен',
                rules: [
                    {
                        target: ['shared', 'app'],
                        allow: '**',
                    },
                    {
                        target: ['entities', 'features', 'widgets'],
                        allow: 'index.(ts|tsx)',
                    },
                ],
            },
        ],
    },
}
