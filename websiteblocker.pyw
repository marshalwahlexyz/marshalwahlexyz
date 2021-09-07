import time
from datetime import datetime as dt

hosts_temp="hosts"
hosts_path=r"C:\Windows\System32\drivers\etc\hosts"
redirect="127.0.0.1"
websites_list=["www.facebook.com","facebook.com","www.bet9ja.com"]

while True:
    if dt(dt.now().year,dt.now().month,dt.now().day,8) < dt.now() < dt(dt.now().year,dt.now().month,dt.now().day,11):
        print ("Working hours no browsing.....")
        with open(hosts_path,'r+') as file:
            content=file.read()
            for website in websites_list:
                if website in content:
                    pass
                else:
                    file.write("\n \n "+redirect+" "+website+"\n")
    else:
        with open(hosts_path,'r+') as file:
            content=file.readlines()
            file.seek(0)
            for line in content:
                if not any(website in line for website in websites_list):
                    file.write(line)
            file.truncate()
        print ("Fun hours")

    time.sleep(5)