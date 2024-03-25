import { memo } from "react";
import { comments } from "./comments.data";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

function Comments() {
  return (
    <div className="comments">
      <div className="flex align-items-center mt-5">
        <span className="text-lg font-bold">Comments</span>
        <div className="count">
          {comments && Array.isArray(comments) ? comments.length : 0}
        </div>
      </div>
      <div>
        {comments &&
          Array.isArray(comments) &&
          comments.map((item: any, index: number) => (
            <div key={index} className="comment__row">
              <img className="w-3rem" src={item.image} alt="" />
              <div className="ml-2 flex flex-column">
                <span className="name">{item.name}</span>
                <span className="date">{item.date}</span>
                <p>{item.comment}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="title">Post a Comment</div>
      <span className="p-input-icon-left w-full mb-3">
        <i className="pi pi-user"></i>
        <InputText className="w-full" placeholder="Name" />
      </span>
      <span className="p-input-icon-left w-full mb-3">
        <i className="pi pi-envelope"></i>
        <InputText className="w-full" placeholder="Email" />
      </span>
      <InputTextarea placeholder="Your comment" className="w-full" rows={5} />
      <div className="flex justify-content-end mt-2">
        <Button severity="info" label="Post Comment" />
      </div>
    </div>
  );
}

export default memo(Comments);
