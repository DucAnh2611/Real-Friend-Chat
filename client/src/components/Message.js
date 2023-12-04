const MessageHolder = ({children, isMe, linkBottom, theme}) => {
    return (
        <div className={`box-border w-fit h-fit p-3 ${isMe ? `bg-${theme.primaryColor} rounded-tr-md text-${theme.primaryText}` : `bg-${theme.secondaryColor}  text-${theme.secondaryText} rounded-tl-md`} rounded-[20px] ${linkBottom 
            ? isMe ? "rounded-br-md" : "rounded-bl-md"
            : "" }`}>
            {children}
        </div>
    )
};

const markContent = (content, contentColor) => {
    let arrCt = content.split(" ");
    return (<>
        {arrCt.map(e => (
            e.startsWith("@")? <b className={`font-bold text-base text-${contentColor} cursor-pointer hover:underline`}>{"@everyone"}</b> : <>{` ${e}`}</>
        ))}
    </>)
}

const NormalMessage = ({content, isMe, linkBottom, theme}) => {
    return  (
        <MessageHolder isMe={isMe} linkBottom={linkBottom} theme={theme}>
            <p className=" break-words text-sm">{
            markContent(
                content, 
                !isMe ? theme.primaryMention : theme.secondaryMention)
            }</p>
        </MessageHolder>
    )
}

const DeleteMessage = ({theme})  => {
    return  (        
        <div className={`box-border w-fit h-fit p-3 bg-transparent border border-${theme.secondaryColor} rounded-[25px]`}>
            <p className={`text-${theme.timeColor} italic text-sm`}>Message has been deleted</p>
        </div>
    )
}

const VoiceMessage = ({content, isMe}) => {
    return  (
        <MessageHolder isMe={isMe}>
            <p>{content} voice is deleveloping</p>
        </MessageHolder>
    )
}

const ImageMessage = ({link, isMe, linkBottom, theme}) => {
    return  (
        <MessageHolder isMe={isMe} linkBottom={linkBottom} theme = {theme}>
            <img className="h-fit max-h-[250px] max-w-full object-cover rounded-2xl cursor-pointer hover:opacity-80" alt="message" src={link}/>
        </MessageHolder>
    )
}
const ConvertContent = ({type, message, isMe, linkBottom, theme}) => {
    switch(type) {
        case 1:
            return <NormalMessage content={message} isMe={isMe} linkBottom={linkBottom} theme={theme}/>;
        case 2: 
            return <ImageMessage link={message} isMe={isMe}  linkBottom={linkBottom} theme={theme}/>
    }
}
export const MyMessage = ({info, linkBottom, showInfo, memberCount, theme, ...props}) => {
    return (
        <div {...props}
        className="h-fit w-full flex flex-col items-start gap-2 pt-1 overflow-hidden"
        key={info.id}>

            <div className="flex flex-row-reverse gap-4 w-full">

                <div className="w-10 h-10">
                    { showInfo && <img className="h-full w-full object-cover rounded-max overflow-hidden aspect-square" alt="user" src={info.avatar}/> }
                </div>

                <div className="max-w-[50%] w-fit h-fit flex flex-col items-end gap-2 overflow-hidden">
                    {showInfo && (
                        <div className="flex w-fit items-center flex-row-reverse justify-between gap-3">
                            <p className="w-fit overflow-hidden whitespace-nowrap font-medium tracking-wide text-[14px] text-white">{info.nickname}</p>
                            <p className="w-fit overflow-hidden whitespace-nowrap font-medium text-xs text-grey-100">{new Date(info.send).toLocaleString()}</p>
                        </div>
                    )}
                    {info.delete == 1 
                    ? <DeleteMessage 
                    theme={theme}/> 

                    : <ConvertContent 
                    type={info.type} 
                    message={info.content} 
                    theme={theme}
                    isMe={true} 
                    linkBottom={linkBottom}/>}
                </div>

            </div>

            { memberCount !== 0 && info.deleted !==1 && 
            <div className="flex items-center h-fit w-full justify-end gap-1">
                {info.seen.map(e => (
                    <div className={`group/{user} flex shrink basis-5 w-5 aspect-square rounded-max relative`}>
                        <img alt="user seen" src={e.avatar} className="w-full h-full overflow-hidden rounded-max object-cover"/>
                        <p className="hidden text-sm w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute right-0 bg-purple-400 bg-opacity-80 backdrop-blur-sm text-purple-500 rounded-lg -top-2 -translate-y-full group-hover/{user}:block z-10">{e.name} seen at {new Date(e.seen_at).toLocaleString()}</p>
                    </div>
                ))}
            </div>}

        </div>
    )
}

export const TheirMessage = ({info, linkBottom, showInfo, memberCount, theme, ...props}) =>{
    return (
        <div {...props}
        className="h-fit w-full flex flex-col items-start gap-2 pt-1 overflow-hidden"
        key={info.id}>
            
            <div className="flex flex-row gap-4 w-full">

                <div className="w-10 h-10">
                    { showInfo && <img className="h-full w-full object-cover rounded-max overflow-hidden aspect-square" alt="user" src={info.avatar}/> }
                </div>

                <div className="max-w-[55%] w-fit h-fit flex items-start gap-2 flex-col overflow-hidden">
                    {showInfo && (
                        <div className="flex w-fit items-center flex-row justify-between gap-3">
                            <p className="w-fit overflow-hidden whitespace-nowrap font-medium tracking-wide text-[14px] text-white">{info.nickname}</p>
                            <p className="w-fit overflow-hidden whitespace-nowrap font-medium text-xs text-grey-100">{new Date(info.send).toLocaleString()}</p>
                        </div>
                    )}
                    {info.deleted == 1 
                    ? <DeleteMessage
                    theme={theme}/> 

                    : <ConvertContent 
                    theme={theme}
                    type={info.type} 
                    message={info.content} 
                    isMe={false} 
                    linkBottom={linkBottom}/>}
                </div>
            </div>

            { memberCount !== 0  && info.deleted !==1 && 
            <div className="flex items-center h-fit w-full justify-end gap-1">
                {info.seen.map(e => (
                    <div className={`group/{user} flex shrink basis-5 w-5 aspect-square rounded-max relative`}>
                        <img alt="user seen" src={e.avatar} className="w-full h-full overflow-hidden rounded-max object-cover"/>
                        <p className="hidden text-sm w-fit h-auto p-2 pl-3 pr-3 whitespace-nowrap absolute right-0 bg-purple-400 bg-opacity-80 backdrop-blur-sm text-purple-500 rounded-lg -top-2 -translate-y-full group-hover/{user}:block z-10">{e.name} seen at {new Date(e.seen_at).toLocaleString()}</p>
                    </div>
                ))}
            </div>}

        </div>
    )
}