export const Title = (props: any) =>{
  const {title}= props;
  return(
    <>
      <div className={`text-[#EFEEE0] text-[24px] font-[700] text-bold`}>
        {title}
      </div>
    </>
  )
}