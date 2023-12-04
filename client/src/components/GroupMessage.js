import { MyMessage, TheirMessage } from "./Message";

const DefineMessageHolder = ({condition, theme, ...props}) => {
    return condition
    ? <MyMessage theme={theme} {...props}/> 
    : <TheirMessage theme={theme} {...props}/>
}

export default function GroupMessage({list, member, theme}) {
    return(
        <div className="w-full h-fit flex flex-col gap-2 justify-end overflow-y-auto pt-20">
        {list.map((e, id) => (
            <DefineMessageHolder 
            condition={e.userid === 2} 
            memberCount = {member.length}
            info={e}
            theme = {theme}
            linkBottom={list[id+1] && e.userid === list[id+1].userid && list[id+1].deleted !== 1}
            showInfo = {!(list[id-1] && e.userid === list[id-1].userid && list[id-1].deleted !== 1)}
            />
        ))}
        </div>
    )
}