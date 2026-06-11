#!/bin/sh
set -e

# Start PocketBase in background
/pb/pocketbase serve --http=0.0.0.0:8080 --dir=/pb/pb_data &
sleep 2

# Create or update superuser (use environment variables)
/pb/pocketbase superuser upsert ${PB_EMAIL:-admin@ndunyupos.com} ${PB_PASSWORD:-admin123}

# Wait for background process
wait
