type DetailContentInfoObject = {
	title : string
	relevantName: string
	relevantIcon: string
	relevantValue: string
	relevantName2: string
	relevantIcon2: string
	relevantValue2: string
	overview: string
}

interface DetailContentProps {
	detail : DetailContentInfoObject
}

function DetailContent(p : DetailContentProps) {
  return (
    <div className="content">
      	<h1 className="title">{p.detail.title}</h1>

		<div className="relevant">
			<span>{p.detail.relevantName} {p.detail.relevantIcon} {p.detail.relevantValue}</span>
			<span>{p.detail.relevantName2} {p.detail.relevantIcon2} {p.detail.relevantValue2}</span>
		</div>

		<div className="overview">
			<p>{p.detail.overview != "" ? p.detail.overview : "No sinopsis 🥲"}</p>
		</div>
    </div>
  );
}

export default DetailContent;
