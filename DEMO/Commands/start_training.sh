echo "Execute Training!"
docker exec superface-v1.5-gpu-1 /bin/sh -c "cd srez/; pwd; python srez_main.py test/test_demo/"
echo "Trainnig Finished!"