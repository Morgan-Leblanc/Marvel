import React,{useState} from "react";


const MoreCharactersData = ({datas}) => {
    const [display,setDisplay]= useState(false)

    const displayInfoUser = () => {
        setDisplay({display: !display})
    }

    return(
        <div>
            <button class="btn btn-dark m-3" data-toggle="modal" data-target="#myModal"  onClick={displayInfoUser}> More informations ?</button>
          {display ? (
    <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{datas.name}</h5>
          <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
        <p>{datas.description}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
          ) : (
            ""
          )}
        </div>

    )
}



export default  MoreCharactersData