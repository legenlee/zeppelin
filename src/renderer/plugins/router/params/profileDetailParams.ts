import { BaseParams } from './baseParams';

export class ProfileDetailParams extends BaseParams {
  public profileId: number;

  public constructor(init: Omit<ProfileDetailParams, 'toPlainObject'>) {
    super();
    this.profileId = init.profileId;
  }
}
