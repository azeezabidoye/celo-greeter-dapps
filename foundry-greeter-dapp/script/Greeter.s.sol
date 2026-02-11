// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Script, console} from "forge-std/Script.sol";
import {Greeter} from "../src/Greeter.sol";

contract GreeterScript is Script {
    Greeter public greeter;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        greeter = new Greeter();

        vm.stopBroadcast();
    }
}
