export interface NavigationNode {
    title: string;
    url?: string;
    tooltip?: string;
    hidden?: boolean;
    children?: NavigationNode[];
}

export type NavigationResponse = { __versionInfo: VersionInfo } & { [name: string]: NavigationNode[] | VersionInfo };

export interface NavigationViews {
    [name: string]: NavigationNode[];
}

export interface CurrentNode {
    url: string;
    view: string;
    nodes: NavigationNode[];
}


export interface CurrentNodes {
    [view: string]: CurrentNode;
}

export interface VersionInfo {
    major: number;
    full: string;
}
