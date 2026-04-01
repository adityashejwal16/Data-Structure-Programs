class Node 
{
    constructor(no) 
    {
        this.data = no;
        this.next = null;
    }
}

class SinglyLL
{
    constructor() 
    {
        this.first = null;
    }

//////////////////////////////////////////////////////////////////////////////////////////////
//  
//     Function name :    InsertFirst
//     Input :            data of node
//     Output :           nothing
//     Description :      Used to insert node at first position
//     Author :           Aditya Dipak Shejwal
//     Date :             01/04/2026
//
/////////////////////////////////////////////////////////////////////////////////////////////

    InsertFirst(no) 
    {
        let newn = new Node(no);

        if (this.first == null) 
        {
            this.first = newn;
        } 
        else 
        {
            newn.next = this.first;
            this.first = newn;
        }
    }

    InsertLast(no)
    {
        let newn = new Node(no);

        if(this.first == null)
        {
           this.first = newn;
        }
        else
        {
            let temp = this.first

            while(temp.next != null)
            {
                temp = temp.next;
            }
            temp.next = newn
        }
    }
    
   DeleteFirst()
   {
    if(this.first == null)
    {
        return
    }
    else if(this.first.next == null)
    {
        this.first = null;
    }
    else
    {
         let temp = this.first;
         this.first = this.first.next;   // 1st Element is automatic delete bcz its use GC
         //delete temp;
    }
    }

    DeleteLast()
    {
        if(this.first == null)
        {
            return
        }
        else if(this.first.next == null)
        {
            this.first = null
        }
        else
        {
            let temp = this.first

            while(temp.next.next != null)
            {
               temp = temp.next
            }
            temp.next = null;
        }

    }
    
    InsertAtPos(pos, no)
    {
        let iCnt = 0
        let iSize = this.Count();   // important

        if((pos < 1) || (pos > iSize+1))
        {
            console.log("Invalid Position");
            return
        }
        if(pos == 1)
        {
            this.InsertFirst(no)
        }
        else if(pos == iSize+1)
        {
            this.InsertLast(no)
        }
        else
        {
            let newn = new Node(no)

            let temp = this.first

            for(iCnt = 1; iCnt < pos -1; iCnt++)
            {
                temp = temp.next
            }

            newn.next = temp.next
            temp.next = newn;
        }
    }

    DeleteAtPos(pos)
    {
        let iCnt = 0
        let target = 0
        let iSize = this.Count();   // important

        if((pos < 1) || (pos > iSize))
        {
            console.log("Invalid Position");
            return
        }
        if(pos == 1)
        {
            this.DeleteFirst()
        }
        else if(pos == iSize)
        {
            this.DeleteLast()
        }
        else
        {
            // let newn = new Node(no)

            let temp = this.first

            for(iCnt = 1; iCnt < pos -1; iCnt++)
            {
                temp = temp.next
            }
            target = temp.next
            temp.next = target.next
        }
    }

    Display() 
    {
        let temp = this.first;

        while (temp != null) 
        {
            process.stdout.write("| " + temp.data + " | -> ");
            temp = temp.next;
        }
        console.log("null");
    }

    Count()
    {
        let iCount = 0;
        let temp = this.first;

        while(temp != null)
        {
            iCount++;
            temp = temp.next;
        }
        return iCount
    }
}

function main() 
{
    let obj = new SinglyLL();
    let iRet = null;

    obj.InsertFirst(75);
    obj.InsertFirst(60);
    obj.InsertFirst(45);

    obj.Display();

    iRet = obj.Count(obj);

    console.log("Number of nodes are : " + iRet);

    
    obj.InsertLast(95);
    obj.InsertLast(105);
    obj.InsertLast(120);

    obj.Display();

    iRet = obj.Count(obj);

    console.log("Number of nodes are : " + iRet);

    obj.DeleteFirst()

    obj.Display();

    iRet = obj.Count(obj);

    console.log("Number of nodes are : " + iRet);

    obj.DeleteLast()

    obj.Display();

    iRet = obj.Count(obj);

    console.log("Number of nodes are : " + iRet);

    obj.InsertAtPos(4,135)

    obj.Display();

    iRet = obj.Count(obj);

    console.log("Number of nodes are : " + iRet);


    obj.DeleteAtPos(3)

    obj.Display();

    iRet = obj.Count(obj);

    console.log("Number of nodes are : " + iRet);


}

main();