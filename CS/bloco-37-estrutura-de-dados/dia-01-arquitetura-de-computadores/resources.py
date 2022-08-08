import subprocess

print(subprocess.run(["lscpu"], capture_output=True))