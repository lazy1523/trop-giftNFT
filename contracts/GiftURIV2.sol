// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev String operations.
 */
library Strings {
    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    /**
     * @dev Converts a `uint256` to its ASCII `string` decimal representation.
     */
    function toString(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    /**
     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.
     */
    function toHexString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0x00";
        }
        uint256 temp = value;
        uint256 length = 0;
        while (temp != 0) {
            length++;
            temp >>= 8;
        }
        return toHexString(value, length);
    }

    /**
     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.
     */
    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {
        bytes memory buffer = new bytes(2 * length + 2);
        buffer[0] = "0";
        buffer[1] = "x";
        for (uint256 i = 2 * length + 1; i > 1; --i) {
            buffer[i] = _HEX_SYMBOLS[value & 0xf];
            value >>= 4;
        }
        require(value == 0, "Strings: hex length insufficient");
        return string(buffer);
    }
}

/// [MIT License]
/// @title Base64
/// @notice Provides a function for encoding some bytes in base64
/// @author Brecht Devos <brecht@loopring.org>
library Base64 {
    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /// @notice Encodes some bytes to the base64 representation
    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xffffff)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))
                out := shl(224, out)

                mstore(resultPtr, out)

                resultPtr := add(resultPtr, 4)
            }

            switch mod(len, 3)
            case 1 {
                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))
            }
            case 2 {
                mstore(sub(resultPtr, 1), shl(248, 0x3d))
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }

}




contract GiftURIV2 {

    using Strings for uint256;

    constructor() {
    }

    function seedByAddr(address owner, uint256 salt) internal pure returns (uint256) {
        return uint256(uint160(owner) + salt);
    }

    function random(uint256 seed) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(seed)));
    }

    function getRandomBetween(uint256 min, uint256 max, uint256 seed) internal pure returns (uint256) {
        uint256 rand = random(seed);
        rand = rand % 10000; //[0, 9999]
        return rand * (max - min) / 10000 + min;
    }

    function addressToString(address _address) internal pure returns(string memory) {
        bytes32 _bytes = bytes32(uint(uint160(_address)));
        bytes memory HEX = "0123456789abcdef";
        bytes memory _addr = new bytes(42);

        _addr[0] = '0';
        _addr[1] = 'x';

        for(uint256 i = 0; i < 20; i++) {
            _addr[2+i*2] = HEX[uint8(_bytes[i + 12] >> 4)];
            _addr[3+i*2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
        }

        return string(_addr);
    }



    function tokenURI(uint256 tokenId, address owner, uint256 value) external view returns (string memory) {
        bytes[60] memory parts;
        uint256 i = 0;
        uint256 j = 0;
        parts[0] = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">';
        parts[++i] = '<style>.cls-1{fill:rgb(39,112,38);}.cls-2{fill:rgb(241,205,146);}</style>';
        parts[++i] = '<rect class="cls-1" width="400" height="600"/>';
        
        //star
        uint256 max = value/10**18;
        string memory showValue = max.toString();
        if (max > 50) {
            max = 50;
        }
        for (j = 1; j <= max; j++) {
            parts[++i] = getStar(block.number * j);
        }

        //gift
        parts[++i] = getGift(value);

        bytes memory byteString;
        for (j = 0; j <= i; j++) {
            byteString = abi.encodePacked(byteString, parts[j]);
        }
        string memory json = string(abi.encodePacked('{"name":"Gift(',showValue,') #',tokenId.toString(),'","description":"GiftNFT is opensource and free.","image":"data:image/svg+xml;base64,',Base64.encode(byteString),'"}'));
        return json;
    }


    function getStar(uint256 seed) internal pure returns (bytes memory) {
        uint256 size = getRandomBetween(20, 90, ++seed);
        uint256 x = getRandomBetween(0, 400-size, ++seed);
        uint256 offY = getRandomBetween(20, 100, ++seed);
        uint256 y = getRandomBetween(size, 600-offY, ++seed);
        uint256 dur = getRandomBetween(30, 90, ++seed);
        string memory durStr = string(abi.encodePacked(uint(dur/10).toString(),'.',uint(dur%10).toString()));
        
        string memory star = string(abi.encodePacked('<text class="cls-2" x="',x.toString(),'" font-size="',size.toString(),'">&#10022;'));
        star = string(abi.encodePacked(star, '<animate attributeName="opacity" values="0.3;1;0.3" dur="',durStr,'s" repeatCount="indefinite"/>'));
        star = string(abi.encodePacked(star, '<animate attributeName="y" values="',y.toString(),';',uint256(y+offY).toString(),';',y.toString(),'" calcMode="paced" dur="',durStr,'s" repeatCount="indefinite"/></text>'));
        return bytes(star);
    }

    function getGift(uint256 value) internal pure returns (bytes memory) {
        uint256 size = 50 + value/10**18;
        if (size > 400) {
            size = 400;
        }
        uint256 x = (400 - size) / 2;
        uint256 y = 600 - (600 - size) / 2;
        return bytes(string(abi.encodePacked('<text transform="translate(',x.toString(),' ',y.toString(),')" font-size="',size.toString(),'px" font-family="Impact">&#127873;</text></svg>')));
    }

}