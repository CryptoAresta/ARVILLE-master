import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import type { Variants } from 'framer-motion'

/* ---------------- Container Animation ---------------- */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.75,
        },
    },
}

/* ---------------- Item Animation ---------------- */

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        filter: 'blur(12px)',
        y: 12,
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 1.5,
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24">
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="sm:mx-auto lg:mr-auto lg:mt-0">

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 max-w-2xl text-5xl font-medium md:text-6xl lg:mt-16">
                                    Arville Aresta
                                </TextEffect>

                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mt-8 max-w-2xl text-lg">
                                    Welcome to my website
                                </TextEffect>

                                {/* Buttons Animation */}
                                <AnimatedGroup
                                    variants={containerVariants}
                                    className="mt-12 flex items-center gap-2"
                                >
                                    <div>
                                        <AnimatedGroup variants={itemVariants}>
                                            <Button asChild size="lg">
                                                <Link href="#">
                                                    Order Now
                                                </Link>
                                            </Button>
                                        </AnimatedGroup>
                                    </div>

                                    <AnimatedGroup variants={itemVariants}>
                                        <Button asChild size="lg" variant="ghost">
                                            <Link href="#">
                                                Call Us
                                            </Link>
                                        </Button>
                                    </AnimatedGroup>
                                </AnimatedGroup>

                            </div>
                        </div>

                        {/* Image Animation */}
                        <AnimatedGroup variants={containerVariants}>
                            <AnimatedGroup variants={itemVariants}>
                                <div className="relative mt-12 mx-auto max-w-5xl rounded-2xl border p-4 shadow-lg">
                                    <Image
                                        src="/mail2.png"
                                        alt="app screen"
                                        width={2700}
                                        height={1440}
                                        className="rounded-2xl"
                                    />
                                </div>
                            </AnimatedGroup>
                        </AnimatedGroup>

                    </div>
                </section>
            </main>
        </>
    )
}