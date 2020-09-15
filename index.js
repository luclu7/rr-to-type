'use strict';

module.exports = function RRToType(number) {
    switch (number) {
        case 1:
            return "A";
            break
        case 2:
            return "NS";
            break
        case 5:
            return "CNAME";
            break
        case 6:
            return "SOA";
            break
        case 12:
            return "PTR";
            break
        case 13:
            return "HINFO";
            break
        case 15:
            return "MX";
            break
        case 16:
            return "TXT";
            break
        case 17:
            return "RP";
            break
        case 18:
            return "AFSDB";
            break
        case 24:
            return "SIG";
            break
        case 25:
            return "KEY";
            break
        case 28:
            return "AAAA";
            break
        case 29:
            return "LOC";
            break
        case 33:
            return "SRV";
            break
        case 35:
            return "NAPTR";
            break
        case 36:
            return "KX";
            break
        case 37:
            return "CERT";
            break
        case 39:
            return "DNAME";
            break
        case 42:
            return "APL";
            break
        case 43:
            return "DS";
            break
        case 44:
            return "SSHFP";
            break
        case 45:
            return "IPSECKEY";
            break
        case 46:
            return "RRSIG";
            break
        case 47:
            return "NSEC";
            break
        case 48:
            return "DNSKEY";
            break
        case 49:
            return "DHCID";
            break
        case 50:
            return "NSEC3";
            break
        case 51:
            return "NSEC3PARAM";
            break
        case 52:
            return "TLSA";
            break
        case 53:
            return "SMIMEA";
            break
        case 55:
            return "HIP";
            break
        case 59:
            return "CDS";
            break
        case 60:
            return "CDNSKEY";
            break
        case 61:
            return "OPENPGPKEY";
            break
        case 62:
            return "CSYNC";
            break
        case 63:
            return "ZONEMD";
            break
        case 108:
            return "EUI48";
            break
        case 109:
            return "EUI64";
            break
        case 249:
            return "TKEY";
            break
        case 250:
            return "TSIG";
            break
        case 256:
            return "URI";
            break
        case 257:
            return "CAA";
            break
        case 32768:
            return "TA";
            break
        case 32769:
            return "DLV";
            break
    }
}