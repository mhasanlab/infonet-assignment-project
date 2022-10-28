export class PersonInfo {
  constructor(
    public personalInfoId?: number,
    public name?: string,
    public countryId?: number,
    public cityId?: number,
    public languageSkills?: string,
    public dateOfBirth?: Date,
    public resumeUpload?: string
  ) { }
}
