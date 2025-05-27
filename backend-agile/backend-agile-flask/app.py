from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)


@app.route('/api/update', methods=['POST'])
def update_data():
    data_received = request.json
    print("Received data:", data_received)
    
    data=[]
    data.append(int(data_received['input']))
    data.append(int(data_received['output']))
    data.append(int(data_received['enquiry']))
    data.append(int(data_received['fdile']))
    data.append(int(data_received['Interface']))
    data.append(int(data_received['added']))
    data.append(int(data_received['changed']))
    data.append(int(data_received['elete']))
    AFP=0
    UFP=6*data[0]+7*data[1]+6*data[2]+15*data[3]+10*data[4]
    FP=UFP*1.07
    d2={1:3,2:5.5,3:7,4:9.5,5:12.5}
    if data_received['devtype']=='0':
        d={1:4,2:9,3:15,4:21,5:26}
        model=joblib.load('maint.joblib')
        AFP=model.predict([data])
        AFP*=d[int(data_received['pf_range'])]
    if data_received['devtype']=='1':
        d={1:3.5,2:7.5,3:11.5,4:15.5,5:19.5}
        model=joblib.load('newdev.joblib')
        AFP=model.predict([data])
        AFP*=d[int(data_received['pf_range'])]
        AFP=abs(AFP)

    AFP=str(AFP)
    AFP=AFP[2:-2]
    print(AFP)
    effort=FP/d2[int(data_received['pf_range'])]
    data_received['effort']=AFP
    data_received['maxeffort']=str(effort)
    print("Updated data:", data_received)
    return jsonify(data_received)
if __name__ == '__main__':
    app.run(port=8000)
