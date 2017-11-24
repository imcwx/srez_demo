putty.exe -ssh wenxiang@acn.sg -i "C:/Users/wen.xiang.chew/Desktop/acnsg/private.key.ppk" -m "C:/GitProjects/srez_demo/DEMO/Commands/clear_pred.sh"
putty.exe -ssh wenxiang@acn.sg -i "C:/Users/wen.xiang.chew/Desktop/acnsg/private.key.ppk" -m "C:/GitProjects/srez_demo/DEMO/Commands/clear_test_demo.sh"

pscp -i "C:/Users/wen.xiang.chew/Desktop/acnsg/private.key.ppk" C:/GitProjects/srez_demo/DEMO/test_demo/* wenxiang@acn.sg:/home/wenxiang/public/superface/test/test_demo/

putty.exe -ssh wenxiang@acn.sg -i "C:/Users/wen.xiang.chew/Desktop/acnsg/private.key.ppk" -m "C:/GitProjects/srez_demo/DEMO/Commands/start_training.sh"

pscp -i "C:/Users/wen.xiang.chew/Desktop/acnsg/private.key.ppk" wenxiang@acn.sg:/home/wenxiang/public/superface/predict/* "C:/GitProjects/srez_demo/DEMO/predict/
