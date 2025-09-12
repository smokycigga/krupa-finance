"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StepperContextType {
  value: number
  defaultValue?: number
}

const StepperContext = React.createContext<StepperContextType | undefined>(undefined)

function useStepper() {
  const context = React.useContext(StepperContext)
  if (!context) {
    throw new Error("useStepper must be used within a Stepper")
  }
  return context
}

interface StepperProps {
  defaultValue?: number
  value?: number
  children: React.ReactNode
  className?: string
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ defaultValue = 1, value, children, className, ...props }, ref) => {
    const currentValue = value !== undefined ? value : defaultValue

    return (
      <StepperContext.Provider value={{ value: currentValue, defaultValue }}>
        <div
          ref={ref}
          className={cn("flex items-center", className)}
          {...props}
        >
          {children}
        </div>
      </StepperContext.Provider>
    )
  }
)
Stepper.displayName = "Stepper"

interface StepperItemProps {
  step: number
  children: React.ReactNode
  className?: string
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ step, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
StepperItem.displayName = "StepperItem"

const StepperTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </div>
  )
})
StepperTrigger.displayName = "StepperTrigger"

interface StepperIndicatorProps {
  className?: string
}

const StepperIndicator = React.forwardRef<HTMLDivElement, StepperIndicatorProps>(
  ({ className, ...props }, ref) => {
    const { value } = useStepper()
    const stepperItem = React.useContext(StepperItemContext)
    const step = stepperItem?.step ?? 1
    
    const isActive = step <= value
    const isCompleted = step < value

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-500 ease-in-out",
          isCompleted
            ? "border-global-1 bg-global-1 text-white transform scale-110"
            : isActive
            ? "border-global-1 bg-global-1 text-white transform scale-105"
            : "border-gray-300 bg-white text-gray-500 transform scale-100",
          className
        )}
        {...props}
      >
        {isCompleted ? (
          <svg
            className="h-5 w-5 animate-in fade-in duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <span className="animate-in fade-in duration-300 font-bold">{step}</span>
        )}
      </div>
    )
  }
)
StepperIndicator.displayName = "StepperIndicator"

const StepperSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { value } = useStepper()
  const stepperItem = React.useContext(StepperItemContext)
  const step = stepperItem?.step ?? 1
  
  // Check if this separator should be filled (if the next step is completed)
  const isCompleted = step < value
  
  return (
    <div
      ref={ref}
      className={cn("flex-1 flex items-center justify-center mx-8 relative", className)}
      {...props}
    >
      {/* Arrow line */}
      <div className="relative w-full h-0.5 flex items-center">
        {/* Base line */}
        <div className="w-full h-0.5 bg-gray-300 relative overflow-hidden">
          {/* Animated progress line */}
          <div 
            className={cn(
              "absolute inset-0 h-full transition-all duration-700 ease-in-out",
              isCompleted ? "w-full bg-global-1" : "w-0 bg-global-1"
            )}
          />
        </div>
        {/* Arrow head */}
        <div className={cn(
          "absolute right-0 w-0 h-0 transition-all duration-700 ease-in-out",
          "border-l-[8px] border-t-[4px] border-b-[4px]",
          "border-t-transparent border-b-transparent",
          isCompleted ? "border-l-global-1" : "border-l-gray-300"
        )} />
      </div>
    </div>
  )
})
StepperSeparator.displayName = "StepperSeparator"

// Context for StepperItem to pass step number to StepperIndicator
interface StepperItemContextType {
  step: number
}

const StepperItemContext = React.createContext<StepperItemContextType | undefined>(undefined)

// Updated StepperItem to provide context
const StepperItemWithContext = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ step, children, className, ...props }, ref) => {
    return (
      <StepperItemContext.Provider value={{ step }}>
        <div
          ref={ref}
          className={cn("flex items-center", className)}
          {...props}
        >
          {children}
        </div>
      </StepperItemContext.Provider>
    )
  }
)
StepperItemWithContext.displayName = "StepperItem"

export {
  Stepper,
  StepperItemWithContext as StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
}