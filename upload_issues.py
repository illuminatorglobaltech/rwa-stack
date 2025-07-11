import csv
import subprocess

# Correct repo name
REPO_NAME = "illuminatorglobaltech/rwa-stack"
CSV_FILE = "rwa_stack_full_100_tasks.csv"

with open(CSV_FILE, newline='', encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        title = row["Title"]
        description = f"**Module**: {row['Module']}\n\n**Type**: {row['Type']}\n\n**Description**:\n{row['Description']}"
        command = [
            "gh", "issue", "create",
            "--repo", REPO_NAME,
            "--title", title,
            "--body", description,
            "--label", row["Type"].lower()
        ]
        subprocess.run(command)
