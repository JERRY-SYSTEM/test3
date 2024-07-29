import { arraySidebar } from "vuepress-theme-hope";

export const docssb = arraySidebar([
    {
        text: 'GlowPE',
        icon: 'windows',
        collapsible: true,
        children: [
            '/docs/feature.md',
            '/docs/coolstartup.md',
            '/docs/licence.md',
            '/docs/updatelog.md',
            '/docs/thanks.md'
        ]
    },
])