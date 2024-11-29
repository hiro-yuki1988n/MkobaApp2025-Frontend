// member.service.ts
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private apollo: Apollo) { }

  saveMkobaMember(memberDto: any) {
    const SAVE_MEMBER_MUTATION = gql`
      mutation SaveMkobaMember($memberDto: MemberDtoInput!) {
        saveMkobaMember(MemberDto: $memberDto) {
          data {
            id
            name
            email
          }
          message
          status
        }
      }
    `;

    return this.apollo.mutate({
      mutation: SAVE_MEMBER_MUTATION,
      variables: { memberDto }
    });
  }
}
