/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InventoryDataWhereInput } from "./InventoryDataWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InventoryDataOrderByInput } from "./InventoryDataOrderByInput";

@ArgsType()
class InventoryDataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InventoryDataWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InventoryDataWhereInput, { nullable: true })
  @Type(() => InventoryDataWhereInput)
  where?: InventoryDataWhereInput;

  @ApiProperty({
    required: false,
    type: [InventoryDataOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InventoryDataOrderByInput], { nullable: true })
  @Type(() => InventoryDataOrderByInput)
  orderBy?: Array<InventoryDataOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InventoryDataFindManyArgs as InventoryDataFindManyArgs };
