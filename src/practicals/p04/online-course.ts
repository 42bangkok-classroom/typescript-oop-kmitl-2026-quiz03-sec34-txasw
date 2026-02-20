export class OnlineCourse {
    public courseName: string = ""
    public maxStudents: number = 0
    private enrolledStudents: number = 0
    private isOpen: boolean = true

    constructor(courseName: string, maxStudents: number) {
        this.courseName = courseName
        this.maxStudents = maxStudents
        this.enrolledStudents = 0
        this.isOpen = true
    }

    enroll(): boolean {
        if (this.isOpen && this.enrolledStudents < this.maxStudents) {
            this.enrolledStudents++
            return true
        }
        return false
    }

    getAvailableSeats(): number {
        return this.maxStudents - this.enrolledStudents
    }

    closeCourse(): void {
        this.isOpen = false
    }

    getCourseStatus(): string {
        return this.isOpen ? "Open" : "Closed"
    }

}
