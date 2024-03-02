import { ClassroomStudents } from "@/components/classroom-students";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { api } from "@/services/api";

export default function Dashboard() {
  const downloadPDF = async () => {
    try{
      const response = await api.get("classrooms/report/197bce21-3b35-4216-a740-6d37aeb2d13b", {
        responseType: "blob",
      })

      const pdfBlob = new Blob([response.data], { type: "application/pdf"})

      const url = window.URL.createObjectURL(pdfBlob)

      const tempLink = document.createElement("a")
      tempLink.href = url
      tempLink.setAttribute("download","1anoA-2023.pdf")

      document.body.appendChild(tempLink)
      tempLink.click()

      document.body.removeChild(tempLink)
      window.URL.revokeObjectURL(url)
    }catch(error) {
      console.error("Error downloading PDF: ", error)
    }
  }

  return (
    <div className='mx-auto'>
      <Header />
      <div className="p-8">
        <Button onClick={downloadPDF}>1ª Ano A</Button>
        <ClassroomStudents />
      </div>
    </div>
  )
}