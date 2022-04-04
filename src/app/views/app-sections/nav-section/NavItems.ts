interface INavItems {
    navTitle: String;
    navComponent?: Function;
    children?:INavItems[];
}
export const navItems : INavItems[] = [
    {
        navTitle: 'ArtWork',
        children: [
            {
                navTitle: 'Sold'
            },
            {
                navTitle:'Shop'
            },
            {
                navTitle: 'Portfolio'
            }
        ]
    },
    {
        navTitle: 'Contact'
    },
    {
        navTitle: 'About'
    }
]