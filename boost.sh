#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Check if the correct number of arguments is provided
if [ "$#" -ne 5 ]; then
  echo "Usage: $0 <commit message> <start date> <end date> <number of commits> <path_to_repo>"
  echo "Example: $0 'Boost commit' '2023-01-01' '2023-01-10' 10 /path/to/repo"
  exit 1
fi

# Assign arguments to variables
COMMIT_MESSAGE=$1
START_DATE=$2
END_DATE=$3
NUM_COMMITS=$4
REPO_PATH=$5

# Navigate to the repository
cd "$REPO_PATH" || { echo "Repository path not found"; exit 1; }

# Function to calculate the number of seconds between two dates
date_diff() {
  local d1=$(date -d "$1" +%s)
  local d2=$(date -d "$2" +%s)
  echo $(( (d2 - d1) / NUM_COMMITS ))
}

# Calculate the interval in seconds
INTERVAL=$(date_diff "$START_DATE" "$END_DATE")

# Loop to create commits
for ((i = 0; i < NUM_COMMITS; i++)); do
  # Calculate the commit date
  COMMIT_DATE=$(date -d "$START_DATE + $((i * INTERVAL)) seconds" "+%Y-%m-%dT%H:%M:%S")

  # Create a dummy file to commit
  echo "$COMMIT_MESSAGE - $i" > dummy_file.txt
  git add dummy_file.txt

  # Commit with the specified date
  GIT_COMMITTER_DATE="$COMMIT_DATE" git commit --date="$COMMIT_DATE" -m "$COMMIT_MESSAGE - $i"
done

# Push the commits to the remote repository
git push

# Cleanup
rm dummy_file.txt

echo "Created $NUM_COMMITS commits between $START_DATE and $END_DATE with message '$COMMIT_MESSAGE'"

