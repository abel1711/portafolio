

export interface PropsIcon{
    fill?: string;
    filled?: boolean;
    size?: number;
    height?: number;
    width?: number;
    label?: string;
}

interface Colors{
    background: string;
    text: string;
    particlesColor: string[];
    shadowColor: string;
    linkColor: string;
    navLinkColor: string;
}
export interface InterfaceTheme{
    isDark: boolean;
    type: string;
    colors: Colors;
}

