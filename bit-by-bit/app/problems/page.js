'use client'

import { useState } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu"

export default function Problems() {
    return(
        <main>
            <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
                <NavigationMenu viewport={false} className="absolute top-40">
                    <NavigationMenuList className="flex space-x-3">
                        <NavigationMenuItem>
                            Topics
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            RoadMap
                        </NavigationMenuItem>
                        
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </main>
    )
}