#!/bin/bash
rm -r dist
npx webpack
rm -r dist/tmp
