import { Version } from './version';

class Latest {
  public readonly release: string;
  public readonly snapshot: string;
}

export class Manifest {
  public readonly latest: Latest;
  public readonly versions: Version[];
}
