import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

export interface SelectItem {
    id: number;
    name: string;
}

export interface SelectInputProps {
    selectList: SelectItem[];
    label?: string;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function SelectInput({ selectList, label }: SelectInputProps) {
    const [selected, setSelected] = useState(selectList[0]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative">
                        <Listbox.Button className="relative w-full h-full py-2 pl-3 pr-10 my-2 text-sm font-semibold text-left rounded-lg shadow-sm cursor-pointer bg-lightGray text-textBlack focus:outline-none lg:my-0">
                            <span className="flex items-center whitespace-nowrap">
                                <Listbox.Label className="block ml-1 ">
                                    {label}
                                </Listbox.Label>
                                <span className="block ml-1 truncate first-letter:uppercase">
                                    {selected.name}
                                </span>
                            </span>
                            <span className="absolute inset-y-0 right-0 z-10 flex items-center pr-2 ml-3 pointer-events-none">
                                <ChevronDownIcon
                                    className="w-5 h-5 text-darkGray"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-75"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {selectList.map((item) => (
                                    <Listbox.Option
                                        key={item.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "bg-primary text-white"
                                                    : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal",
                                                            "ml-3 block truncate first-letter:uppercase"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? "text-white"
                                                                : "text-primary",
                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="w-5 h-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
}
