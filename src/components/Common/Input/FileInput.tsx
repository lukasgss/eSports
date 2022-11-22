import React from "react";
import { useDropzone } from "react-dropzone";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { File } from "../../../services/CommonTypes";
import Button from "../Button";

interface Accept {
  [name: string]: string[];
}

interface FileInputProps {
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  accept: Accept;
  label: string;
  files: File[];
  textButton?: string;
  showNoFileText?: boolean;
  drag?: boolean;
}

const FileInput = ({
  name,
  register,
  setValue,
  accept,
  label,
  showNoFileText = true,
  textButton,
  files,
}: FileInputProps) => {
  const onDrop = function <T>(droppedFiles: T[]) {
    setValue(name, droppedFiles, { shouldValidate: true });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <div>
      <label className="block">{label}</label>
      <div className="flex flex-col md:flex-row items-start md:items-center lg:gap-5">
        <div
          className={
            "p-2 border-gray-900 bg-primary-gray" +
            (isDragActive ? "bg-gray-400" : "bg-gray-200")
          }
          {...getRootProps()}
        >
          <Button>
            <input id={name} {...register(name)} {...getInputProps()} />
            {textButton ? textButton : "Faça upload"}
          </Button>
        </div>

        {!!files?.length ? (
          <div className="flex gap-5 mt-2">
            {files.map((file) => {
              return (
                <div key={file.name}>
                  <span>{file.name}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            {showNoFileText ? (
              <span className="text-[#bbb]">Nenhum arquivo selecionado</span>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default FileInput;
