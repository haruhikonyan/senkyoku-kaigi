#!/bin/bash

set -xe

git config --global --add safe.directory /senkyok-kaigi
pnpm config set store-dir /home/vscode/.local/share/pnpm/store
pnpm install --frozen-lockfile
