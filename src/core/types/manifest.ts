class Latest {
  public readonly release: string;
  public readonly snapshot: string;
}

class Version {
  public readonly id: string;
  public readonly type: string;
  public readonly url: string;
  public readonly time: Date;
  public readonly releaseTime: Date;
  public readonly sha1: string;
  public readonly complianceLevel: number;
}

export class Manifest {
  public readonly latest: Latest;
  public readonly versions: Version[];
}
