export class CreateDonationDTO {
  readonly id: number;
  readonly amount: number;
  readonly currency: string;
  readonly donor: string;
  readonly project: string;
  readonly date: Date;
}
