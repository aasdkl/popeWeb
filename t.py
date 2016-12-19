# -*- coding: utf-8 -*-
from xml.dom.minidom import parse
import xml.dom.minidom
import json
import datetime
import re

DOMTree = xml.dom.minidom.parse("pope.xml")
collection = DOMTree.documentElement
allPope = collection.getElementsByTagName("item")
fil=file("t.txt","w+")

tstay=[]
tin={}
tout={}
tplace={}
trome=[]
tnorome=[]

num=allPope.length
for each in allPope:
    numEle = each.getElementsByTagName('num')[0].childNodes
    num = numEle[0].data if len(numEle)==1 else ''
    numpic = each.getElementsByTagName('numpic')[0].getAttribute("path")
    time = each.getElementsByTagName('time')[0].childNodes[0].data.replace('?',"<br>")
    head = each.getElementsByTagName('head')[0].getAttribute("path")
    name1 = each.getElementsByTagName('name1')[0].childNodes[0].data.replace('?',"<br>")
    name2 = each.getElementsByTagName('name2')[0].childNodes[0].data.replace('?',"<br>")
    bornEle = each.getElementsByTagName('born')[0].childNodes
    born = bornEle[0].data.replace('?',"<br>") if len(bornEle)==1 else ''
    ageEle = each.getElementsByTagName('age')[0].childNodes
    age = ageEle[0].data if len(ageEle)==1 else ''
    tagEle = each.getElementsByTagName('tag')[0].childNodes
    tag = tagEle[0].data.replace('?',"<br>") if len(tagEle)==1 else ''

    ele=[0,0]
    
    if u'/' in age:
        t=age.split('/')
        if u'-' not in t[0] and u'-' not in t[1]:
            ele[0]=int(t[0].strip())
            ele[1]=int(t[1].strip())
            
        if u'-' not in t[0]:
            if t[0] in tin:
                tin[t[0]]+=1
            else:
                tin[t[0]]=1
        if u'-' not in t[1]:
            if t[1] in tout:
                tout[t[1]]+=1
            else:
                tout[t[1]]=1
    if u'（' in time and u'—' not in num:
        timestr = time.split(u'（')
        tim=timestr[0].split('-')
        f = tim[0].strip()
        t = tim[1].strip()
        if u'现今' in t:
            t=u'2016 年 12 月 25 日'
        f=re.findall(r"\d+",f)
        t=re.findall(r"\d+",t)
        
        time1=datetime.datetime(int(f[0]), int(f[1]), int(f[2]), 0, 0)
        time2=datetime.datetime(int(t[0]), int(t[1]), int(t[2]), 0, 0)

        delta = timestr[1].split(u'）')[0]
        day = (time2-time1).days
        tstay.append((delta, day))
        
    if u'<br>' in born:
        bor=born.split('<br>')[1]
        if u'（' in bor:
            bor=bor.split(u'（')[0]
        if u'-' not in bor and u' ' in bor:
            t=bor.split(u' ')
            bor=t[0] if u'罗马' not in t[1] else t[1]
        if ele[0]!=0:
            if u'罗马' in bor:
                trome.append(ele)
            else:
                tnorome.append(ele)
        if bor in tplace:
            tplace[bor]+=1
        else:
            tplace[bor]=1

    a=u'';
    if numpic and head:
        a= u'{"num":"%s<br><img src=\'%s\' />", "time":"%s", "head":"<img src=\'%s\' />", "name1":"%s", "name2":"%s", "born":"%s", "age":"%s", "tag":"%s" },\n'%(num,numpic,time,head,name1,name2,born,age,tag)
    elif head:
        a= u'{"num":"%s", "time":"%s", "head":"<img src=\'%s\' />", "name1":"%s", "name2":"%s", "born":"%s", "age":"%s", "tag":"%s" },\n'%(num,time,head,name1,name2,born,age,tag)
    elif numpic:
        a= u'{"num":"%s<br><img src=\'%s\' />", "time":"%s", "head":"", "name1":"%s", "name2":"%s", "born":"%s", "age":"%s", "tag":"%s" },\n'%(num,numpic,time,name1,name2,born,age,tag)
    else:
        a= u'{"num":"%s", "time":"%s", "head":"", "name1":"%s", "name2":"%s", "born":"%s", "age":"%s", "tag":"%s" },\n'%(num,time,name1,name2,born,age,tag)
    fil.write(a.encode('utf-8'))

        
tplace= sorted(tplace.iteritems(), key=lambda d:d[1], reverse = True)
tin= sorted(tin.iteritems(), key=lambda d:int(d[0].strip()))
tout= sorted(tout.iteritems(), key=lambda d:int(d[0].strip()))

name=[]
count=[]
for e in tplace:
    name.append(e[0])
    count.append(e[1])
inage=[]
ins=[]
for e in tin:
    inage.append(int(e[0].strip()))
    ins.append(e[1])
outage=[]
out=[]
for e in tout:
    outage.append(int(e[0].strip()))
    out.append(e[1])
stay=[]
delta=[]
for e in tstay:
    stay.append(e[0])
    delta.append(e[1])

noRome=int(num)-count[0]

name=json.dumps(name, encoding="UTF-8", ensure_ascii=False)
count=json.dumps(count, encoding="UTF-8", ensure_ascii=False)
stay=json.dumps(stay, encoding="UTF-8", ensure_ascii=False)
trome=json.dumps(trome, encoding="UTF-8", ensure_ascii=False)
tnorome=json.dumps(tnorome, encoding="UTF-8", ensure_ascii=False)

fil.write('\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n\n%s\n%s'%(name.encode('utf-8'),count,noRome,inage,ins,outage,out,stay.encode('utf-8'),delta,trome.encode('utf-8'),tnorome.encode('utf-8')))

fil.close()
