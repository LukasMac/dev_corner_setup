#!/usr/bin/env bash

cd nodejs
npm install
set DEBUG=express:* & npm start
