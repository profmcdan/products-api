import { Edge } from './edge.dto';
import { PageInfo } from './page-info.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Connection } from '@devoxa/prisma-relay-cursor-connection';

export class Page<Record> {
  constructor(
    partial: Promise<Connection<{ id: string }, Edge<{ id: string }>>>,
  ) {
    Object.assign(this, partial);
  }

  edges: Edge<Record>[];

  @ApiProperty()
  pageInfo: PageInfo;

  @ApiProperty()
  totalCount: number;
}
