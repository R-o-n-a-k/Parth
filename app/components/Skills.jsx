import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const Skills = ({ index, title, items }) => {
    return (
        <>
            <AccordionItem data-aos="fade-up" key={index} value={`item-${index}`}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <div className="px-2 py-2 text-sm text-content flex flex-wrap gap-x-1 gap-y-1">
                        {items.map((item, idx) => (
                            <Badge key={idx} variant="outline">{item}</Badge>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </>
    )
}

export default Skills