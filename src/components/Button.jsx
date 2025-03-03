
const PrimaryButton = ({text, style, display}) => {
  return (
   <button onClick={display} style={{ display: "flex",width: "150px",height: "42px",borderRadius: "20px",alignItems: "center",justifyContent: "center",border: "1px solid rgb(160, 200, 245)", marginRight: "30px",fontSize: "16px",paddingTop: "4px",background: "rgba(146, 192, 245, 0.08)",color: "white",
    cursor: "pointer",
    
   ...style
    }}>{text}</button>
  )
}

export default PrimaryButton
