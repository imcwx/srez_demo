REM echo Clear Test and Predict Folder
putty.exe -ssh wenxiang@acn.sg -i "C:\Users\wen.xiang.chew\Desktop\acnsg\private.key.ppk" -m "Commands\clear_pred.sh"
putty.exe -ssh wenxiang@acn.sg -i "C:\Users\wen.xiang.chew\Desktop\acnsg\private.key.ppk" -m "Commands\clear_test_demo.sh"

REM echo Transfer NEW test Pictures
pscp -i "C:\Users\wen.xiang.chew\Desktop\acnsg\private.key.ppk" test_demo\* wenxiang@acn.sg:/home/wenxiang/public/superface/test/test_demo/

REM echo Execute Training
putty.exe -ssh wenxiang@acn.sg -i "C:\Users\wen.xiang.chew\Desktop\acnsg\private.key.ppk" -m "Commands\start_training.sh"

REM echo Get Predicted Images
pscp -i "C:\Users\wen.xiang.chew\Desktop\acnsg\private.key.ppk" wenxiang@acn.sg:/home/wenxiang/public/superface/predict/* predict\
