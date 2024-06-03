const dataName = ["name","colour","weapon"]

function saveDataLocal()
{
  if(sessionStorage.getItem("name") == null || sessionStorage.getItem("name") == "")
  {
    
    for (let i = 0; i < dataName.length; i++)
    {
      sessionStorage.setItem(dataName[i], document.getElementById(dataName[i]).value);
    }

    Console.Log(sessionStorage.getItem("name"))
  }

  else
  {
    document.getElementById("Warning").innerHTML = "You have already submitted your data!"
    document.getElementById("Warning").style.color = "red"
    document.getElementById("Warning").style.fontSize = "20px"

    document.getElementById("submitButton").disabled = true;
  }
}