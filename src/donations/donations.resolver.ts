import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DonationsService } from './donations.service';
import { CreateDonationInput } from './dto/create-donation.input';
import { CreateDonationDTO } from './dto/donations.dto';
import { Donation } from './entities/donation.entity';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation((returns) => String)
  create() {
    return this.donationsService.create();
  }

  @Query((returns) => [Donation], { name: 'donations' })
  findAll() {
    return this.donationsService.findAll();
  }

  @Query((returns) => String)
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne(id);
  }
}
