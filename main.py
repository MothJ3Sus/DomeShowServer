from flask import Flask, render_template, redirect, request

app = Flask('app')
totalData = {}
counter = 0

@app.route('/')
def mainRun():
  return render_template('index.html')


@app.route('/Thank-You', methods=['GET', 'POST'])
def thankRun():
  global req
  global counter
  global totalData
  if request.method == 'GET':
    return redirect('/')

  req = request.form
  counter += 1
  totalData[counter] = req
  
  return render_template("thank.html", data=req)

@app.route("/Read-Data-Unity")
def readDataUnityRun():
  return totalData
    

app.run(host='0.0.0.0', port=8080)