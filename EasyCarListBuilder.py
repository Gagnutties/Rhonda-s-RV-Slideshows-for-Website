# -*- coding: utf-8 -*-
"""
Created on Wed May  4 09:54:05 2022

@author: dylan
"""
import tkinter as tk

root = tk.Tk()
root.title('Website Maker')
root.geometry('600x200')
c=0
Slide = 0

def PrintHTML():
    global Slide
    global c
    YearS = Year.get()
    MakeModelS = MakeModel.get()
    MilesS = Miles.get()
    EngineS = Engine.get()
    ExtColorS = ExtColor.get()
    
    MMStr = MakeModel.get()
    Img = MMStr.replace(" ", "")+"_"+VIN.get()+"_1"
    IDName = MMStr.replace(" ", "")+"_"+VIN.get()
    ArrayName = MMStr.replace(" ", "")+"_"+VIN.get()+"_Array"
    
    if c == 0:
        print("""  <div id="list">""")
    print(f"""    <div id="#rcorners3" class="panel">
        <h1 class="panel__header">{YearS} {MakeModelS}</h1>
        <div class="SlideHolder">
            <img id="{IDName}" class="panel__image" src="http://rhondasrvandauto.com/photo/{Img}.jpg" alt="Image of {MakeModelS} with {ExtColorS} exterior.">
            <button id="LeftButton" onclick="Left({str(Slide)}, {ArrayName}, {str(Slide)})">&#10094</button>
            <button id="RightButton" onclick="Right({str(Slide)}, {ArrayName}, {str(Slide)})">&#10095</button>
        </div>
        <table class="panel__body">
            <tr>
            <td class="panel_bold">Year</td>
            <td>{YearS}</td>
            </tr>
            <tr>
            <td class="panel_bold">Miles</td>
            <td>{MilesS}</td>
            </tr>
            <tr>
            <td class="panel_bold">Engine</td>
            <td>{EngineS}</td>
            </tr>
            <tr>
            <td class="panel_bold">Exterior Color</td>
            <td>{ExtColorS}</td>
            </tr>
        </table>
      </div>""")
    if c == 2:
        print("""  </div>""")
        c=0
    else:
        c=c+1
    Year.delete(0, 'end')
    MakeModel.delete(0, 'end')
    Miles.delete(0, 'end')
    ExtColor.delete(0, 'end')
    VIN.delete(0, 'end')
    Slide += 1
        
Label = tk.Label(root, text='Year, MakeModel, Miles, Engine, ExtColor, VIN')
Label.grid(column=3, row=0)
Year = tk.Entry(root, text='Year')
Year.grid(column=1, row=0)

MakeModel = tk.Entry(root, text='MakeModel')
MakeModel.grid(column=1, row=1)

Miles = tk.Entry(root, text='Miles')
Miles.grid(column=1, row=2)

Engine = tk.Entry(root, text='Engine')
Engine.grid(column=1, row=3)

ExtColor = tk.Entry(root, text='ExtColor')
ExtColor.grid(column=1, row=4)

VIN = tk.Entry(root, text='VIN')
VIN.grid(column=1, row=5)

Button = tk.Button(root, text='Make Site', command=PrintHTML)
Button.grid(column=0, row=0)

root.mainloop()
