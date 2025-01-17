import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class OauthService {
    private accessToken: string;

    constructor(private httpService: HttpService) {
        this.accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMxNDlmNzE4YzEzYWExODFjNWVmMjhlNWY2ODA5NDQ5YzIwODJmMjE1ZDc2MmJjY2Y0ZjNkMmExNGJmNWE4ZjI0YzczZjk4ZjIwYzkwNTk4In0.eyJhdWQiOiI4NjQ5NmYyZC02YmY4LTRlMGQtYmZiNS0xZTcwY2Q5ZmE5ZTYiLCJqdGkiOiIzMTQ5ZjcxOGMxM2FhMTgxYzVlZjI4ZTVmNjgwOTQ0OWMyMDgyZjIxNWQ3NjJiY2NmNGYzZDJhMTRiZjVhOGYyNGM3M2Y5OGYyMGM5MDU5OCIsImlhdCI6MTcxODM4NzgwNCwibmJmIjoxNzE4Mzg3ODA0LCJleHAiOjE3MTg5MjgwMDAsInN1YiI6IjExMTYxNDYyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODAxNDc0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiODllMGU0MTctNmM2Ny00NjlmLWI5YzEtYTRmZjYxMDViZTU4In0.C1zbb6X_Mo67Y-ngRMOs_tZ_ebzbTKgQONGXJPwkB8c1_SNViRXQgXqUwd-gzNYsN1FCBZjREjMmxnch7NSFfuNcLzSZdYSuXBbjIC9S-NGL21_HAu8J23x-s2eN2Pt6pcBvKVIapVknUFNpXKJWe4nD5zJnEf14Wbr89-kBVBDldMTRBmN-uq2iCVX0v-GcTCq4U1ATNXcaitC6wXowKMEqgI8zRPViMe0CMMHgztI474KLAaUS-RtINcOtcyA8fsJOSmE1Rucn5viNZFS9VmMgidqwuWGTJIzVfzt-PoBNAoAuZ7nIvyqoirfExp_51CsSXlQ0czQWrh8RByfZ-g';
    }

    get token() {
        return this.accessToken;
    }
}
