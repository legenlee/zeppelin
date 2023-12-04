type GamefileArgumentRule = {
  action: string;
  features: Record<string, boolean>;
};

type GamefileArgument =
  | string
  | {
      rules: GamefileArgumentRule[];
      value: string | string[];
    };

type LibraryArgumentRule = {
  action: string;
  os: Record<string, string>;
};

type LibraryArgument =
  | string
  | {
      rules: LibraryArgumentRule[];
      value: string | string[];
    };

type Library = {
  downloads: {
    artifact: {
      path: string;
      sha1: string;
      size: number;
      url: string;
    };
    name: string;
    rules: LibraryArgumentRule[];
  };
};

type Downloads = Record<
  'client' | 'client_mappings' | 'server' | 'server_mappings',
  {
    sha1: string;
    size: number;
    url: string;
  }
>;

type Logging = Record<
  'client',
  {
    argument: string;
    file: {
      id: string;
      sha1: string;
      size: number;
      url: string;
    };
    type: string;
  }
>;

type VersionDetail = {
  arguments: {
    game: string | GamefileArgument[];
    jvm: string | LibraryArgument[];
  };
  assetIndex: {
    id: string;
    sha1: string;
    size: number;
    totalSize: number;
    url: string;
  };
  assets: string;
  compilanceLevel: number;
  downloads: Downloads;
  id: string;
  javaVersion: {
    component: string;
    majorVersion: number;
  };
  libraries: Library[];
  logging: Logging;
  mainClass: string;
  minimumLauncherVersion: number;
  releaseTime: string;
  time: string;
  type: string;
};

type Version = {
  id: string;
  type: string;
  url: string;
  time: string;
  releaseTime: string;
  sha1: string;
  complianceLevel: number;
};

type VersionManifest = {
  latest: Record<'release' | 'snapshot', string>;
  versions: Version[];
};

type AssetIndex = {
  objects: Record<string, { hash: string; size: number }>;
};
