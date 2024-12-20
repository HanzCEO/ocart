#!/usr/bin/env bash

set -e

CANISTER=$1
echo Compiling for $CANISTER
cargo build --release --target wasm32-unknown-unknown --package $CANISTER
candid-extractor target/wasm32-unknown-unknown/release/$CANISTER.wasm > src/$CANISTER/$CANISTER.did
dfx generate $CANISTER
